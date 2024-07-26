1.  What is a NoSQL Database, and explain the types of NoSQL database?
ans --> A NoSQL (Not Only SQL) database is a non-relational database that provides a mechanism for storage and retrieval of data that is modeled in ways other than the tabular relations used in relational databases (SQL databases). NoSQL databases are designed to handle large volumes of structured, semi-structured, and unstructured data.

Types of NoSQL databases include:

  - Document Stores: Store data in flexible, JSON-like documents. Examples: MongoDB, Couchbase.

  - Key-Value Stores: Store data as key-value pairs. Examples: Redis, DynamoDB.

  - Column Family Stores: Store data in columns rather than rows. Examples: Cassandra, HBase.

  - Graph Databases: Store data in graph structures with nodes, edges, and properties. Examples: Neo4j, Amazon Neptune.

2. What is the difference between SQL and NoSQL databases?
ans -->  - SQL Databases: Follow a structured schema, typically using tables with predefined columns and rows. They use SQL (Structured Query Language) for querying and managing data.
           - NoSQL Databases: Have dynamic schemas for unstructured data. They use various data models like document-oriented, key-value, column-family, or graph. Queries are typically simpler and optimized for specific data models.

3. How to choose between MongoDB and MySQL based on your requirements?
ans -->  - Choose MongoDB if you need flexible schema design, scalability, and handling of large volumes of unstructured data. It's suitable for applications with evolving data models or where rapid development and deployment are essential.
         - Choose MySQL if you need strong transactional support, relational integrity, and adherence to ACID properties (Atomicity, Consistency, Isolation, Durability). It's suitable for applications requiring complex queries, joins, and structured data storage.

4. What are collections and documents in a MongoDB database?
ans --> - Collections: Equivalent to tables in SQL databases, collections in MongoDB are groups of documents. Each collection can store multiple documents.
        - Documents: Equivalent to rows in SQL databases, documents are individual records stored in JSON-like format (BSON) within collections. They can vary in structure and contain key-value pairs.

5. What is BSON? What is the difference between BSON and JSON?
ans --> BSON (Binary JSON): BSON is a binary-encoded serialization of JSON-like documents used by MongoDB for storing and transmitting data. It adds additional data types and optimizations for efficiency compared to plain JSON.
        Difference: BSON includes additional data types (e.g., Date, Binary Data) and optimizations for traversal and storage efficiency. JSON is text-based and more human-readable but lacks some of the data types and efficiency optimizations of BSON.

6. What are MongoDB Compass and MongoDB Shell used for?
ans --> MongoDB Compass: A graphical user interface (GUI) tool for MongoDB that allows users to interact with databases visually. It provides features like exploring data, running queries, and managing databases.
        MongoDB Shell: A command-line interface (CLI) tool for MongoDB that allows users to interact with databases using JavaScript-based commands. It provides direct access to MongoDB's functionalities for querying, updating, and managing data.

7. How to create collections in MongoDB?
ans --> To create a collection in MongoDB, you can simply insert documents into it. MongoDB creates collections automatically when you insert the first document.
       ex- db.collectionName.insertOne({ key: 'value' });

8. What is the difference between insertMany and insertOne in MongoDB?
ans --> insertOne: Inserts a single document into a collection.
        insertMany: Inserts multiple documents into a collection in a single operation.

        // Example: insertOne
            db.collectionName.insertOne({ key: 'value' });

        // Example: insertMany
            db.collectionName.insertMany([{ key: 'value1' }, { key: 'value2' }]);

9. What is the difference between deleteOne and deleteMany in MongoDB?
ans --> deleteOne: Deletes a single document that matches the specified filter criteria.
        deleteMany: Deletes all documents that match the specified filter criteria.

        // Example: deleteOne
            db.collectionName.deleteOne({ key: 'value' });

        // Example: deleteMany
            db.collectionName.deleteMany({ key: 'value' });

10. How to read data in MongoDB? What is the difference between find and findOne?
ans --> find: Retrieves multiple documents from a collection based on the specified query criteria. Returns a cursor.
        findOne: Retrieves a single document from a collection that matches the specified query criteria. Returns the document or null if no document matches.

        // Example: find
            db.collectionName.find({ key: 'value' });

        // Example: findOne
            db.collectionName.findOne({ key: 'value' });

11. What is $set in MongoDB?
ans --> $set is a MongoDB update operator that sets the value of a field in a document. It updates the value of the field if it exists or adds the field with the specified value if it does not exist.

        // Example: Using $set to update a field
            db.collectionName.updateOne({ _id: ObjectId('...') }, { $set: { key: 'new value' } });

12. How to filter data using MongoDB?
ans --> You can filter data in MongoDB using query operators like $eq, $gt, $lt, $in, $and, $or, etc., within the find method.


        // Example: Filtering data using find
            db.collectionName.find({ 
                  $and: [
                        { key1: { $eq: 'value' } },
                        { key2: { $gt: 10 } }
                    ]
                }