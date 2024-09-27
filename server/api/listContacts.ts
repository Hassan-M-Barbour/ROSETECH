
export default defineEventHandler(async(event) => {
   // const requestBody = await readBody(event);
    //console.log(requestBody)
    
    const db = useDatabase("myDatabase");
    
    const result = await db.sql`SELECT * FROM Contact`;
       return result.rows;
    
    });
    
    
    
    
    