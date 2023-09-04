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

db.products.find({}, {
    name: 1,
    category: 1
})

db.products.find({}, {
    tags: 0,
    price: 0
})

db.products.find({}, {
    name: 1,
    tags: {
        $elemMatch: {
            $in: ['samsung', 'logitech', 'accessories']
        }
    }
})


db.products.find({
    tags: {
        $exists: true
    }
}, {
    name: 1,
    "tags.$": 1
})

db.products.find({
    tags: {
        $exists: true
    }
}, {
    name: 1,
    tags: {
        $slice: 2
    }
})

db.products.find({}).count()

db.products.find({}).limit(4)

db.products.find({}).skip(2).limit(4)

db.products.find({}).sort({
    category: 1,
    name: -1
}).limit(4)

db.products.updateOne({
    _id: 1
}, {
    $set: {
        category: 'food'
    }
})

db.products.updateOne({
    _id: 2
}, {
    $set: {
        category: 'food'
    }
})

db.products.updateMany({
    $and: [
        {
            category: {
                $eq: 'food'
            }
        },
        {
            tags: {
                $exists: false
            }
        }
    ]
}, {
    $set: {
        tags: ['food']
    }
})

db.products.insertOne({
    _id: 9,
    name: 'ups salah',
    wrong: 'salah'
})

db.products.replaceOne({
    _id: 9
}, {
    name: 'Adidas Sepatu Lari Pria',
    price: new NumberLong("1100000"),
    category: "shoes",
    tags: [
        'adidas', 'shoes', 'running'
    ]
})

db.products.updateMany({}, {
    $set: {
        stock: 0
    }
})

db.products.updateMany({}, {
    $inc: {
        stock: 10
    }
})

db.customers.updateMany({}, {
    $rename: {
        name: 'full_name'
    }
})

db.customers.updateMany({}, {
    $set: {
        wrong: 'ups'
    }
})

db.customers.updateMany({}, {
    $unset: {
        wrong: ''
    }
})

db.products.updateMany({}, {
    $currentDate: {
        lastModifiedDate: {
            $type: 'date'
        }
    }
})

db.products.updateMany({}, {
    $set: {
        ratings: [90, 80, 70]
    }
})

db.products.updateMany({
    ratings: 90
}, {
    $set: {
        'ratings.$': 100
    }
})

db.products.updateMany({}, {
    $set: {
        'ratings.$[]': 100
    }
})

db.products.updateMany({}, {
    $set: {
        ratings: [90, 80, 70]
    }
})

db.products.updateMany({}, {
    $set: {
        'ratings.$[element]' : 100
    }
}, {
    arrayFilters: [
        {
            element: {
                $gte: 80
            }
        }
    ]
})

db.products.updateMany({}, {
    $set: {
        'ratings.0': 50,
        'ratings.1': 60
    }
})

db.products.find({_id: 1})

db.products.updateOne({_id: 1}, {
    $addToSet: {
        tags: 'popular'
    }
})

db.products.updateOne({_id: 1}, {
    $pop: {
        ratings: -1
    }
})

db.products.find({_id: 2})

db.products.updateOne({_id: 2}, {
    $pop: {
        ratings: 1
    }
})

db.products.updateMany({}, {
    $set: {
        ratings: [90, 80, 70]
    }
})

db.products.updateMany({}, {
    $pull: {
        ratings: {
            $gte: 80
        }
    }
})

db.products.updateMany({}, {
    $push: {
        ratings: 0
    }
})

db.products.updateMany({}, {
    $pullAll: {
        ratings: [100, 0]
    }
})

db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300]
        }
    }
})


db.products.updateMany({}, {
    $addToSet: {
        tags: {
            $each: ['trending', 'popular']
        }
    }
})

db.products.updateMany({}, {
    $push: {
        tags: {
            $each: ['hot'],
            $position: 1
        }
    }
})

db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $sort: -1
        }
    }
})

db.products.updateMany({}, {
    $push: {
        ratings: {
            $each: [100, 200, 300, 400, 500],
            $slice: 10,
            $sort: -1
        }
    }
})

db.customers.insertOne({
    _id: "spammer",
    full_name: "Spammer"
})

db.customers.deleteOne({
    _id: "spammer"
})

db.customers.insertMany([
    {
        _id: "spammer1",
        full_name: "Spammer"
    },
    {
        _id: "spammer2",
        full_name: "Spammer"
    },
    {
        _id: "spammer3",
        full_name: "Spammer"
    }
])

db.customers.deleteMany({
    _id: {
        $regex: "spammer"
    }
})
