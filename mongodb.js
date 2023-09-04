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

db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "eko",
                full_name: "Eko"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "kurniawan",
                full_name: "Kurniawan"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ['eko', 'kurniawan', 'khannedy']
                }
            },
            update: {
                $set: {
                    full_name: 'Eko Kurniawan Khannedy'
                }
            }
        }
    }
])

db.products.createIndex({
    category: 1
})

db.products.dropIndex("category_1")

db.products.find({
    category: 'food'
})

db.products.find({
    category: 'food'
}).explain()

db.products.find({
    category: 'food'
}).sort({
    category:1
}).explain()

db.products.find({
    category: 'food'
}).sort({
    category:-1
}).explain()

db.products.find({
    tags: 'samsung'
}).explain()

db.products.find({
    category: 'food',
    tags: "samsung"
}).explain()

db.products.createIndex({
    stock: 1,
    tags: 1
})

db.products.find({
    stock: 10,
    tags: "popular"
})

db.products.find({
    stock: 10,
    tags: "popular"
}).explain()

db.products.find({
    stock: 10
}).explain()

db.products.find({
    tags: 'popular'
}).explain()

db.products.find({
    name: "samsung",
    tags: "popular"
}).explain()

db.products.createIndex({
    name: 'text',
    category: 'text',
    tags: 'text'
}, {
    weights:{
        name: 10,
        category: 5,
        tags: 1
    }
})

db.products.find({
    $text: {
        $search: 'mie'
    }
})

db.products.find({
    $text: {
        $search: 'mie laptop'
    }
})

db.products.find({
    $text: {
        $search: '"mie sedap"'
    }
})

db.products.find({
    $text: {
        $search: 'mie -sedap'
    }
})

db.products.find({
    $text: {
        $search: 'mie -sedap'
    }
}).explain()

db.products.find({
    $text: {
        $search: 'mie laptop'
    }
}, {
    searchScore: {
        $meta: 'textScore'
    }
})

db.customers.createIndex({
    "customFields.$**" : 1
})

db.customers.insertMany([
    {
        _id: "budi",
        full_name: "Budi",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rully",
        full_name: "Rully",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rudi",
        full_name: "Rudi",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

db.customers.find({
    "customFields.passion" : "Entepreneur"
}).explain();

db.customers.find({
    "customFields.ipk" : 3.2
}).explain();

db.customers.find({
    "customFields.hobby" : "Gaming"
}).explain();

db.createCollection("sessions");

db.sessions.createIndex({
    createdAt: 1
}, {
    expireAfterSeconds: 10
})

db.sessions.insertOne({
    _id: 1,
    session: "Session 1",
    createdAt: new Date()
})

db.customers.createIndex({
    email: 1
}, {
    unique: true,
    sparse: true
})

db.customers.updateOne({
    _id: "eko"
}, {
    $set: {
        email: "eko@example.com"
    }
})

db.customers.updateOne({
    _id: "joko"
}, {
    $set: {
        email: "eko@example.com"
    }
})

db.customers.find({
    full_name : "eko Kurniawan Khannedy"
});

db.customers.createIndex({
    full_name: 1
}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

db.customers.find({
    full_name : "eko Kurniawan Khannedy"
}).collation({
    locale: 'en',
    strength: 2
});

db.products.createIndex({
    price: 1
}, {
    partialFilterExpression: {
        stock: {
            $gt: 0
        }
    }
})

db.products.find({
    price: 2500
})

db.products.find({
    price: {
        $eq: 2500
    },
    stock: {
        $gt: 0
    }
})

use admin

db.createUser({
    user: 'mongo',
    pwd: 'mongo',
    roles: [
        'userAdminAnyDatabase',
        'readWriteAnyDatabase'
    ]
})

"mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin"

"mongodb://salah:salah@localhost:27017/belajar?authSource=admin"

use admin

db.createUser({
    user: 'contoh',
    pwd: 'contoh',
    roles: [
        {
            role: 'read',
            db: 'test'
        }
    ]
})

db.createUser({
    user: 'contoh2',
    pwd: 'contoh2',
    roles: [
        {
            role: 'readWrite',
            db: 'test'
        }
    ]
})

"mongodb://contoh:rahasia@localhost:27017/test?authSource=admin"

"mongodb://contoh2:contoh2@localhost:27017/test?authSource=admin"

db.sample.insertOne({
    _id: 1,
    name: "eko"
})

db.changeUserPassword('contoh', 'rahasia')

db.dropUser("contoh")

db.updateUser("contoh2", {
    roles: [
        {
            role: 'readWrite',
            db: 'test'
        },
        {
            role: 'readWrite',
            db: 'belajar'
        }
    ]
})

db.createRole({
    role: 'session_management',
    roles: [
        {
            role: 'read',
            db: 'belajar'
        }
    ],
    privileges: [
        {
            resource: {
                db: "belajar",
                collection: "sessions"
            },
            actions: ["insert"]
        }
    ]
})

db.getRoles({
    showPrivileges: true
})

db.createUser({
    user: 'eko',
    pwd: 'eko',
    roles: ['session_management']
})

"mongodb://eko:eko@localhost:27017/test?authSource=admin"

db.customers.insertOne({
    _id: "contoh",
    name: "Eko Kurniawan Khannedy"
})

db.sessions.insertOne({
    _id: 'test',
    name: 'test'
})


db.sessions.deleteOne({
    _id: 'test'
})

db.sessions.updateOne({
    _id: 'test'
}, {
    $set: {
        name: 'test lagi'
    }
})

bin/mongodump --uri="mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin" --out=backup-dump

bin/mongoexport --uri="mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin" --collection="customers" --out=customers.json

bin/mongorestore --uri="mongodb://mongo:mongo@localhost:27017/belajar_restore?authSource=admin" --dir=backup-dump/belajar

bin/mongoimport --uri="mongodb://mongo:mongo@localhost:27017/belajar_import?authSource=admin" --collection="customers" --file=customers.json
