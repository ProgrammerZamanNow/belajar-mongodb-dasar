db.createCollection("customers");

db.createCollection("products");

db.createCollection("orders");

db.getCollectionNames();

db.customers.find()

db.customers.insertOne({
    _id: "khannedy",
    name: "Eko Kurniawan Khannedy"
})

db.products.insertMany([
    {
        _id : 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong("2000")
    },
    {
        _id : 2,
        name: "Mie Sedap Soto",
        price: new NumberLong("2000")
    }
])

db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("8000"),
    items: [
        {
            product_id: 1,
            price: new NumberLong("2000"),
            quantity: new NumberInt("2")
        },
        {
            product_id: 2,
            price: new NumberLong("2000"),
            quantity: new NumberInt("2")
        }
    ]
})

db.customers.find({
    _id: "khannedy"
})

db.customers.find({
    name: "Eko Kurniawan Khannedy"
})

db.products.find({
    price: 2000
})

db.orders.find({
    "items.product_id": 1
})
