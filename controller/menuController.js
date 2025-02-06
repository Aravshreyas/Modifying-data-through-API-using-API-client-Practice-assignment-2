const MenuItem = require('../model/menuSchema'); 


const updateItem = async(req,res) => {
    try{
        const {name,description,price} = req.body;
        const {id} = req.params;
        const updatedItem = await MenuItem.findByIdAndUpdate(id,{name,description,price},{new:true , runValidators:true});
        if (!updatedItem) {
            return res.status(404).json({ error: "Menu item not found." });
        }
        res.status(200).json({ message: "Menu item updated", updatedItem });
    }catch(error){
        console.error("Error in updating item:",error);
        res.status(500).json({message:"Internal server error"});
    }

    
}




  const deleteItem = async(req,res) => {
    try{
        const {id} = req.params;
        const deletedItem = await MenuItem.findByIdAndDelete(id);
        if(!deletedItem){
            return res.status(404).json({error:"Menu item not found"});
        }
        res.status(200).json({message:"Menu item deleted",deletedItem});
    }catch(error){
        console.error("Error in deleting item:",error);
        res.status(500).json({message:"Internal server error"});
    }
  }

const addItem = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: "Name and price are required" });
        }
        const newItem = await MenuItem.create({ name, description, price });
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Error in adding item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getMenuItem = async (req, res) => {
    try {
        const items = await MenuItem.find();
        if (items.length === 0) {
            return res.status(404).json({ message: "No items found" });
        }
        res.status(200).json(items);
    } catch (error) {
        console.error("Error in getting items:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { addItem, getMenuItem,updateItem,deleteItem };