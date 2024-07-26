 1. Retrieve all the documents.
ans. db.collection.find({})
2.  Retrieve all the first documents.
ans. db.collection.findOne({})
{
    _id: ObjectId('6697e30ccb53add8a6e5f806'),
    first_name: 'Kimbra',
    last_name: 'Ballentime',
    gender: 'Female',
    age: 33,
    salary: 53090
  }

3.    Update the age of the employee to 35 where the first_name is "Sidnee".
ans. mydb> db.user.updateOne({first_name:"Sidnee"},{$set:{age:35}})
  {
     acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
  }


4.     Change the salary of "Meredeth Groveham" to 55000.
ans.    mydb> db.user.updateOne({first_name:"Meredeth" , last_name:"Groveham"},{$set:{salary:55000}})
    {
        acknowledged: true,
        insertedId: null,
        matchedCount: 1,
        modifiedCount: 1,
        upsertedCount: 0
    }

5.      Update the last name of "Nikolaus" to "Park".
ans.     mydb> db.user.updateOne({first_name:"Nikolaus"},{$set:{last_name:"Park"}})
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    mydb> db.user.find({first_name:"Nikolaus"})
    [
      {
        _id: ObjectId('6698b65d554a0214c53a632e'),
      first_name: 'Nikolaus',
      last_name: 'Park',
      gender: 'Male',
      age: 54,
      salary: 30379
      }
    ]

6.    Update the salary of all employees to 35000 where the age is 37.
ans.   mydb> db.user.updateMany({age:37},{$set:{salary:35000}})
  {
    acknowledged: true,
    insertedId: null,
    matchedCount: 14,
    modifiedCount: 14,
    upsertedCount: 0
  }

7.    Update the last name of all the employees to "Jamme" where the age is 28.
ans.   mydb> db.user.updateMany({age:28},{$set:{last_name:"Jamme"}})
  {
    acknowledged: true,
    insertedId: null,
    matchedCount: 14,
   modifiedCount: 14,
    upsertedCount: 0
  }

8. For all employees named "Kimbra", add a new field middle_name with the value "Marie".
ans. mydb> db.user.updateOne({first_name:"Kimbra"},{$set:{middle_name:"Marie"}})
{
acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0
}

9. Find all users who are 33 years old.
ans.  mydb> db.user.find({age:33})
[
{
_id: ObjectId('6698b65d554a0214c53a631e'),
first_name: 'Kimbra',
last_name: 'Ballentime',
gender: 'Female',
age: 33,
salary: 53090
},
{
_id: ObjectId('6698b65d554a0214c53a6345'),
first_name: 'Hazel',
last_name: 'Ragbourne',
gender: 'Male',
age: 33,
salary: 76259
},
{
_id: ObjectId('6698b65d554a0214c53a6361'),
first_name: 'Jessalin',
last_name: 'Averall',
gender: 'Female',
age: 33,
salary: 91197
},
{
_id: ObjectId('6698b65d554a0214c53a6379'),
first_name: 'Ode',
last_name: 'Terrazzo',
gender: 'Male',
age: 33,
salary: 11469
},
{
_id: ObjectId('6698b65d554a0214c53a63bf'),
first_name: 'Corabelle',
last_name: 'Thaxter',
gender: 'Polygender',
age: 33,
salary: 48942
},
{
_id: ObjectId('6698b65d554a0214c53a63cc'),
first_name: 'Haskell',
last_name: 'Foulkes',
gender: 'Male',
age: 33,
salary: 12640
},
{
_id: ObjectId('6698b65d554a0214c53a6402'),
first_name: 'Yurik',
last_name: 'Edbrooke',
gender: 'Male',
age: 33,
salary: 97461
},
{
_id: ObjectId('6698b65d554a0214c53a642b'),
first_name: 'Jodie',
last_name: 'De Benedictis',
gender: 'Agender',
age: 33,
salary: 99633
},
{
_id: ObjectId('6698b65d554a0214c53a6435'),
first_name: 'Donnell',
last_name: 'Normavill',
gender: 'Male',
age: 33,
salary: 65674
},
{
_id: ObjectId('6698b65d554a0214c53a647c'),
first_name: 'Kimble',
last_name: 'Ambrogioni',
gender: 'Male',
age: 33,
salary: 52357
},
{
_id: ObjectId('6698b65d554a0214c53a6632'),
first_name: 'Aleksandr',
last_name: 'Lackey',
gender: 'Bigender',
age: 33,
salary: 82980
}
]

10. Retrieve documents for users with a salary greater than 50000.
ans.  mydb> db.user.find({salary:{$gt:50000}})
[
{
_id: ObjectId('6698b65d554a0214c53a631e'),
first_name: 'Kimbra',
last_name: 'Ballentime',
gender: 'Female',
age: 33,
salary: 53090
},
{
_id: ObjectId('6698b65d554a0214c53a6320'),
first_name: 'Alaric',
last_name: 'Hickin',
gender: 'Male',
age: 30,
salary: 94818
},
{
_id: ObjectId('6698b65d554a0214c53a6323'),
first_name: 'Michel',
last_name: 'Sidebottom',
gender: 'Male',
age: 23,
salary: 87916
},
{
_id: ObjectId('6698b65d554a0214c53a6325'),
first_name: 'Cart',
last_name: 'Gerhartz',
gender: 'Male',
age: 36,
salary: 82696
},
{
_id: ObjectId('6698b65d554a0214c53a6326'),
first_name: 'Meredeth',
last_name: 'Groveham',
gender: 'Male',
age: 50,
salary: 62105
},
{
_id: ObjectId('6698b65d554a0214c53a6329'),
first_name: 'Porty',
last_name: 'Stone',
gender: 'Male',
age: 27,
salary: 69830
},
{
_id: ObjectId('6698b65d554a0214c53a632d'),
first_name: 'Meriel',
last_name: 'Larmor',
gender: 'Female',
age: 55,
salary: 88554
},
{
_id: ObjectId('6698b65d554a0214c53a6330'),
first_name: 'Drucill',
last_name: 'Karlqvist',
gender: 'Genderfluid',
age: 21,
salary: 58847
},
{
_id: ObjectId('6698b65d554a0214c53a6331'),
first_name: 'Jaquenette',
last_name: 'Trowsdale',
gender: 'Female',
age: 73,
salary: 99332
},
{
_id: ObjectId('6698b65d554a0214c53a6333'),
first_name: 'Mendel',
last_name: 'Harty',
gender: 'Male',
age: 74,
salary: 63676
},
{
_id: ObjectId('6698b65d554a0214c53a6335'),
first_name: 'Hugh',
last_name: 'Park',
gender: 'Male',
age: 66,
salary: 50869
},
{
_id: ObjectId('6698b65d554a0214c53a6336'),
first_name: 'Calv',
last_name: 'Rogier',
gender: 'Male',
age: 46,
salary: 59134
},
{
_id: ObjectId('6698b65d554a0214c53a6338'),
first_name: 'Wendell',
last_name: 'Roscrigg',
gender: 'Male',
age: 61,
salary: 65686
},
{
_id: ObjectId('6698b65d554a0214c53a6339'),
first_name: 'Quinlan',
last_name: 'Matfield',
gender: 'Male',
age: 43,
salary: 58546
},
{
_id: ObjectId('6698b65d554a0214c53a633b'),
first_name: 'Ammamaria',
last_name: 'Eddowes',
gender: 'Female',
age: 18,
salary: 80153
},
{
_id: ObjectId('6698b65d554a0214c53a633d'),
first_name: 'Liana',
last_name: 'Jamme',
gender: 'Female',
age: 28,
salary: 55849
},
{
_id: ObjectId('6698b65d554a0214c53a6340'),
first_name: 'Hetti',
last_name: 'Gianuzzi',
gender: 'Female',
age: 52,
salary: 64330
},
{
_id: ObjectId('6698b65d554a0214c53a6341'),
first_name: 'Lionel',
last_name: 'Hiscoe',
gender: 'Male',
age: 48,
salary: 92350
},
{
_id: ObjectId('6698b65d554a0214c53a6343'),
first_name: 'Guenevere',
last_name: "O'Daly",
gender: 'Female',
age: 79,
salary: 56383
},
{
_id: ObjectId('6698b65d554a0214c53a6344'),
first_name: 'George',
last_name: 'Valenta',
gender: 'Male',
age: 42,
salary: 87627
}
]
Type "it" for more

11. Find all the users where the gender is Female and age is 79.
ans. mydb> db.user.find({gender:"Female",age:79})
[
{
_id: ObjectId('6698a5908930fd1bc8e425bd'),
first_name: 'Ricki',
last_name: 'Southwood',
gender: 'Female',
age: 79,
salary: 14521
},
{
_id: ObjectId('6698a5908930fd1bc8e425cc'),
first_name: 'Guenevere',
last_name: "O'Daly",
gender: 'Female',
age: 79,
salary: 56383
},
{
_id: ObjectId('6698a5908930fd1bc8e426a7'),
first_name: 'Petronilla',
last_name: 'Summerlee',
gender: 'Female',
age: 79,
salary: 46254
},
{
_id: ObjectId('6698a5908930fd1bc8e42744'),
first_name: 'Mel',
last_name: 'Joannidi',
gender: 'Female',
age: 79,
salary: 10125
},
{
_id: ObjectId('6698a5908930fd1bc8e4276c'),
first_name: 'Lilian',
last_name: 'Rockwill',
gender: 'Female',
age: 79,
salary: 91105
},
{
_id: ObjectId('6698a5908930fd1bc8e42849'),
first_name: 'Veronica',
last_name: 'Dod',
gender: 'Female',
age: 79,
salary: 29397
},
{
_id: ObjectId('6698a5908930fd1bc8e428a0'),
first_name: 'Brynna',
last_name: 'Spurling',
gender: 'Female',
age: 79,
salary: 22493
},
{
_id: ObjectId('6698a5908930fd1bc8e428db'),
first_name: 'Rachele',
last_name: 'Fardell',
gender: 'Female',
age: 79,
salary: 70882
}
]


12. Find all the employees where the first_name is "George" and gender is Male.
ans. mydb> db.user.find({first_name:"George", gender:"Male"})
[
  {
     _id: ObjectId('6698b65d554a0214c53a6344'),
    first_name: 'George',
    last_name: 'Valenta',
    gender: 'Male',
    age: 42,
    salary: 87627
  }
]

13. Find all users whose salary is less than or equal to 50000.
ans.  mydb> db.user.find({salary:{$lte:50000}})
[
{
_id: ObjectId('6698b65d554a0214c53a631f'),
first_name: 'Alla',
last_name: 'Spehr',
gender: 'Female',
age: 57,
salary: 20307
},
{
_id: ObjectId('6698b65d554a0214c53a6321'),
first_name: 'Merell',
last_name: 'Muscat',
gender: 'Male',
age: 52,
salary: 25936
},
{
_id: ObjectId('6698b65d554a0214c53a6322'),
first_name: 'Sidnee',
last_name: 'Edmans',
gender: 'Male',
age: 44,
salary: 26158
},
{
_id: ObjectId('6698b65d554a0214c53a6324'),
first_name: 'Althea',
last_name: 'Keenleyside',
gender: 'Female',
age: 76,
salary: 39178
},
{
_id: ObjectId('6698b65d554a0214c53a6327'),
first_name: 'Ludvig',
last_name: 'Dunsford',
gender: 'Male',
age: 68,
salary: 45382
},
{
_id: ObjectId('6698b65d554a0214c53a6328'),
first_name: 'Saundra',
last_name: 'Ebden',
gender: 'Male',
age: 30,
salary: 27305
},
{
_id: ObjectId('6698b65d554a0214c53a632a'),
first_name: 'Bennie',
last_name: 'Doerr',
gender: 'Female',
age: 18,
salary: 10487
},
{
_id: ObjectId('6698b65d554a0214c53a632b'),
first_name: 'Rosanne',
last_name: 'Shakespeare',
gender: 'Female',
age: 41,
salary: 44329
},
{
_id: ObjectId('6698b65d554a0214c53a632c'),
first_name: 'Annadiane',
last_name: 'Gronou',
gender: 'Female',
age: 43,
salary: 34159
},
{
_id: ObjectId('6698b65d554a0214c53a632e'),
first_name: 'Nikolaus',
last_name: 'Park',
gender: 'Male',
age: 54,
salary: 30379
},
{
_id: ObjectId('6698b65d554a0214c53a632f'),
first_name: 'Andros',
last_name: 'Sartain',
gender: 'Male',
age: 30,
salary: 42717
},
{
_id: ObjectId('6698b65d554a0214c53a6332'),
first_name: 'Junie',
last_name: 'Benge',
gender: 'Female',
age: 74,
salary: 34639
},
{
_id: ObjectId('6698b65d554a0214c53a6334'),
first_name: 'Ricki',
last_name: 'Southwood',
gender: 'Female',
age: 79,
salary: 14521
},
{
_id: ObjectId('6698b65d554a0214c53a6337'),
first_name: 'Timothea',
last_name: 'Spender',
gender: 'Female',
age: 37,
salary: 35000
},
{
_id: ObjectId('6698b65d554a0214c53a633a'),
first_name: 'Blithe',
last_name: 'Trainor',
gender: 'Female',
age: 64,
salary: 34795
},
{
_id: ObjectId('6698b65d554a0214c53a633c'),
first_name: 'Rey',
last_name: 'Amberger',
gender: 'Female',
age: 37,
salary: 35000
},
{
_id: ObjectId('6698b65d554a0214c53a633e'),
first_name: 'Taber',
last_name: 'Di Carlo',
gender: 'Male',
age: 72,
salary: 23867
},
{
_id: ObjectId('6698b65d554a0214c53a633f'),
first_name: 'Kristal',
last_name: 'Jamme',
gender: 'Female',
age: 56,
salary: 26382
},
{
_id: ObjectId('6698b65d554a0214c53a6342'),
first_name: 'Sheffie',
last_name: 'Cull',
gender: 'Male',
age: 41,
salary: 35967
},
{
_id: ObjectId('6698b65d554a0214c53a6346'),
first_name: 'Cacilie',
last_name: 'Scully',
gender: 'Female',
age: 70,
salary: 16035
}
]
Type "it" for more