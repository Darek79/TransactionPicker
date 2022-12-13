import { rest } from 'msw';
export const handlers = [
    rest.get('/Transactions.json', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    first_name: 'Sammie',
                    last_name: 'Todeo',
                    transactions: [
                        {
                            date: 1666664758000,
                            transaction: 115.14,
                        },
                        {
                            date: 1669741092000,
                            transaction: 288.81,
                        },
                        {
                            date: 1668128641000,
                            transaction: 113.69,
                        },
                        {
                            date: 1664194000000,
                            transaction: 302.27,
                        },
                        {
                            date: 1667499611000,
                            transaction: 75.41,
                        },
                        {
                            date: 1662600831000,
                            transaction: 163.32,
                        },
                        {
                            date: 1665405835000,
                            transaction: 237.99,
                        },
                        {
                            date: 1665275222000,
                            transaction: 235.96,
                        },
                        {
                            date: 1663292531000,
                            transaction: 59.1,
                        },
                        {
                            date: 1663410285000,
                            transaction: 117.67,
                        },
                        {
                            date: 1662003203000,
                            transaction: 382.2,
                        },
                        {
                            date: 1667767585000,
                            transaction: 364.24,
                        },
                        {
                            date: 1664242336000,
                            transaction: 26.09,
                        },
                        {
                            date: 1664856546000,
                            transaction: 274.3,
                        },
                        {
                            date: 1665441387000,
                            transaction: 349.87,
                        },
                        {
                            date: 1662918474000,
                            transaction: 315.16,
                        },
                        {
                            date: 1666931825000,
                            transaction: 155.75,
                        },
                        {
                            date: 1666111968000,
                            transaction: 98.89,
                        },
                        {
                            date: 1666073150000,
                            transaction: 391.22,
                        },
                        {
                            date: 1666513975000,
                            transaction: 178.02,
                        },
                        {
                            date: 1663948104000,
                            transaction: 168.75,
                        },
                        {
                            date: 1664550046000,
                            transaction: 115.74,
                        },
                        {
                            date: 1666633933000,
                            transaction: 65.72,
                        },
                        {
                            date: 1669400078000,
                            transaction: 123.98,
                        },
                        {
                            date: 1667759962000,
                            transaction: 323.25,
                        },
                        {
                            date: 1664918321000,
                            transaction: 269.91,
                        },
                        {
                            date: 1669035597000,
                            transaction: 250.91,
                        },
                        {
                            date: 1662727181000,
                            transaction: 75.23,
                        },
                        {
                            date: 1662426227000,
                            transaction: 32.56,
                        },
                        {
                            date: 1664625803000,
                            transaction: 257.93,
                        },
                        {
                            date: 1662503226000,
                            transaction: 389.15,
                        },
                        {
                            date: 1663377756000,
                            transaction: 308.22,
                        },
                        {
                            date: 1665215386000,
                            transaction: 224.78,
                        },
                        {
                            date: 1665131870000,
                            transaction: 186.41,
                        },
                        {
                            date: 1663491080000,
                            transaction: 95.98,
                        },
                        {
                            date: 1662295247000,
                            transaction: 285.21,
                        },
                        {
                            date: 1667989989000,
                            transaction: 116.32,
                        },
                        {
                            date: 1663773448000,
                            transaction: 250.18,
                        },
                        {
                            date: 1662260129000,
                            transaction: 27.02,
                        },
                        {
                            date: 1666884174000,
                            transaction: 389.1,
                        },
                        {
                            date: 1667846206000,
                            transaction: 331.21,
                        },
                        {
                            date: 1668477424000,
                            transaction: 380.24,
                        },
                        {
                            date: 1667226929000,
                            transaction: 98.33,
                        },
                        {
                            date: 1667906445000,
                            transaction: 243.42,
                        },
                        {
                            date: 1669324051000,
                            transaction: 237.57,
                        },
                        {
                            date: 1663490557000,
                            transaction: 339.0,
                        },
                        {
                            date: 1667975272000,
                            transaction: 206.23,
                        },
                        {
                            date: 1665166304000,
                            transaction: 268.26,
                        },
                        {
                            date: 1668697591000,
                            transaction: 201.08,
                        },
                        {
                            date: 1665776288000,
                            transaction: 161.19,
                        },
                    ],
                },
            ])
        );
    }),
];
