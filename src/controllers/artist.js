
const getDb = require('../services/db')


exports.create = async (req, res) => {
    const db = await getDb();
    const { name, genre } = req.body;
  
    try {
      await db.query(`INSERT INTO Artist (name, genre) VALUES ('${name}', '${genre}')`);
  
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  
    db.close();
  };

  exports.read = async (req, res) =>{
      const db = await getDb()
      try {
        const [artists] = await db.query('SELECT * FROM Artist');
          await db.query('SELECT  * FROM Artist')
          console.log(artists)
          res.status(200).json(artists)
          
      } catch (error) {
          res.status(404)
          
      }
  }
  exports.readbyId = async(req, res) =>{
      const db = await getDb()

     const {artistsId}= req.params
     const [[artist]] = await db.query('SELECT * FROM artist WHERE id = ?',[artistsId])
     if (!artist){
         res.sendStatus(404)
     } else {
         res.status(200).json(artist)
     }
  } 
  
  exports.update = async(req, res)=>{
      const db= await getDb()
      const {artistId}= req.params
      const data = req.body;
      try {
        const [
          { affectedRows },
        ] = await db.query('UPDATE Artist SET ? WHERE id = ?', [data, artistId]);
    
        if (!affectedRows) {
          res.sendStatus(404);
        } else {
          res.status(200).send();
        }
      } catch (err) {
        res.sendStatus(500);
      }
    
      db.close();

  }
exports.delete = async (req, res)=>{
    const {artistId} = req.params
    const db = await getDb()


try {
    const sqlStatement = 'DELETE From Artist WHERE id = ?'
    const [{affectedRows},]= await db.query(sqlStatement, artistId)
    if(!affectedRows){
        res.sendStatus(404)

    } else{
        res.status(200).send()

    }


    
} catch (error) {
    res.sendStatus500
    
}


}