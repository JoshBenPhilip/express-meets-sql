import connection from './db.js';

export const createPet = async (pet) => {

    const name = pet.name,
    age = pet.age,
    breed = pet.breed,
    species = pet.species,
    gender = pet.gender,
    is_kid_friendly = pet.is_kid_friendly,
    is_hypoallergenic = pet.is_hypoallergenic


    const insertQuery = `INSERT INTO pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly)
    VALUES (?,?,?,?,?,?,?)`;

    const input = [name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly]

    try {
        const [results] = await connection.query(insertQuery, input)
        return results;
}   catch (error){
        console.error(error)
}
}

export const getPets = async () =>{ 
    const selectQuery = "SELECT * FROM pets"

    // try {
    //     const [results] = await connection.promis().query(selectQuery)
    //     return results
    // } catch (error){
    //     console.log(error)
    // }

return connection.query(selectQuery)
.then(results => {
    return results[0];
})
.catch(err => console.error(err))
 }


console.log("These are the pets", await getPets () )

// connection.end()