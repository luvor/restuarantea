export default [
  {
    tableId: '1',
    tableName: 'Столик #1',
    tableStatus: 'free',
    tableOrders: [
      {
        orderId: '1',
        orderStatus: 'done',
        orderItems: [
          {
            itemId: '1',
            itemTitle: 'Кофе',
            itemPrice: 100,
            itemQuantity: 1,
          },
          {
            itemId: '2',
            itemTitle: 'Чай',
            itemPrice: 50,
            itemQuantity: 2,
          },
        ],
      },
      {
        orderId: '2',
        orderStatus: 'done',
        orderItems: [
          {
            itemId: '3',
            itemTitle: 'Сок',
            itemPrice: 150,
            itemQuantity: 1,
          },
        ],
      },
    ],
  },
  {
    tableId: '20',
    tableName: 'Столик #2',
    tableStatus: 'busy',
    tableOrders: [
      {
        orderId: '3',
        orderStatus: 'done',
        orderItems: [
          {
            itemId: '4',
            itemTitle: 'Салат',
            itemPrice: 200,
            itemQuantity: 1,
          },
        ],
      },
      {
        orderId: '4',
        orderStatus: 'done',
        orderItems: [
          {
            itemId: '5',
            itemTitle: 'Суп',
            itemPrice: 250,
            itemQuantity: 1,
          },
        ],
      },
    ],
  },
]
