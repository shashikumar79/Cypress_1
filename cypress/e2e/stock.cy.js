
import data from '../fixtures/stock.json'
describe('Fetch Stock Data', () => {
    it('Visits the NDTV Profit stocks page and logs stock data', () => {
        cy.visit('https://www.ndtvprofit.com/markets/equities/stocks-in-indices', { timeout: 120000 });
        cy.wait(10000);

        const stockData = [];

        // First, we need to capture the table headers to use them as keys
        cy.get('thead tr th').then($headers => {
            const headers = [];
            $headers.each((index, header) => {
                headers.push(header.innerText.trim());
            });

            // Now we capture each row of the table body
            cy.get('tbody>tr').each(($row) => {
                const rowData = {};
                cy.wrap($row).find('td').each(($cell, index) => {
                    rowData[headers[index]] = $cell.text().trim();
                }).then(() => {
                    stockData.push(rowData);
                });
            }).then(() => {
                // Write the data to a JSON file
                cy.writeFile('cypress/fixtures/stock.json', JSON.stringify(stockData, null, 2))
            });
        });
        // expect(data[20].STOCKS).to.equal('Adani Ports')
        expect(data[20]["CHANGE(RS)"]).to.equal('-1.2').should('exist')
        

    });
});
