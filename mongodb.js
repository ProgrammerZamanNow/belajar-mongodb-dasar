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
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong("2000")
    },
    {
        _id: 2,
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

db.products.insertMany([
    {
        _id: 3,
        name: "Pop Mie Rasa Bakso",
        price: new NumberLong("2500"),
        category: "food"
    },
    {
        _id: 4,
        name: "Samsung Galaxy S9",
        price: new NumberLong("10000000"),
        category: "handphone"
    },
    {
        _id: 5,
        name: "Acer Predator XXI",
        price: new NumberLong("25000000"),
        category: "laptop"
    }
])

db.customers.find({
    _id: {
        $eq: "khannedy"
    }
})

db.products.find({
    price: {
        $gt: 2000
    }
})

db.products.find({
    category: {
        $in: ["laptop", "handphone"]
    },
    price: {
        $gt: 10000000
    }
})

db.products.find({
    $and: [
        {
            category: {
                $in: ["laptop", "handphone"]
            }
        },
        {
            price: {
                $gt: 10000000
            }
        }
    ]
})

db.products.find({
    category: {
        $not: {
            $in: ['laptop', 'handphone']
        }
    }
})

db.products.find({
    category: {
        $exists: true
    }
})

db.products.find({
    category: {
        $exists: false
    }
})

db.products.find({
    category: {
        $type: "string"
    }
})

db.products.find({
    price: {
        $type: ['int', 'long']
    }
})

db.customers.insertOne({
    _id: 'joko',
    name: 'joko'
})

db.customers.find({
    $expr: {
        $eq: ['$_id', '$name']
    }
})

db.products.find({
    $jsonSchema: {
        required: ['name', 'category']
    }
})

db.products.find({
    $jsonSchema: {
        required: ['name'],
        properties: {
            name: {
                type: 'string'
            },
            price: {
                type: 'number'
            }
        }
    }
})

db.products.find({
    price: {
        $mod: [5, 0]
    }
})

db.products.find({
    price: {
        $mod: [1000000, 0]
    }
})

db.products.find({
    name: {
        $regex: /mie/,
        $options: 'i'
    }
})

db.products.find({
    name: {
        $regex: /^Mie/
    }
})


db.customers.find({
    $where: function (){
        return this._id == this.name;
    }
})

db.products.insertMany([
    {
        _id: 6,
        name: "Logitech Wireless Mouse",
        price: new NumberLong("175000"),
        category: "laptop",
        tags: ["logitech", "mouse", "accessories"]
    },
    {
        _id: 7,
        name: "Cooler Pad Gaming",
        price: new NumberLong("200000"),
        category: "laptop",
        tags: ["cooler", "laptop", "accessories", "fan"]
    },
    {
        _id: 8,
        name: "Samsung Curve Monitor",
        price: new NumberLong("1750000"),
        category: "computer",
        tags: ["samsung", "monitor", "computer"]
    }
])

db.products.find({
    tags: {
        $all: ['samsung', 'monitor']
    }
})

db.products.find({
    tags: {
        $elemMatch: {
            $in: ['samsung', 'logitech']
        }
    }
})

db.products.find({
    tags: {
        $size: 4
    }
})
