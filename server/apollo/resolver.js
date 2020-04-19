import Category from '../model/category';
import Item from '../model/item';
import List from '../model/list';
import ListItems from '../model/listItems';

const resolvers = {
    Query: {
        getCategories: () => Category.find({}),
        getCategory: (root, args) => Category.findById(args.id),
        getItems: () => Item.find({}),
        getItem: (root, args) => Item.findById(args.id),
        getList: () => List.find({}),
        getSingleList: (root, args) => List.findById(args.id),
        getListItems: () => ListItems.find({}),
        getListItem: (root,args) => ListItems.findById(args.id)
    },
    Item: {
        category(parent) {
            return Category.findById(parent.category);
        }
    },
    ListItems : {
        list(parent){
            return List.findById(parent.list)
        },
        item(parent){
            return Item.findById(parent.item)
        }
    },
    Mutation: {
        addCategory: (root, args) => {
            let category = new Category({
                name: args.name
            });
            return category.save();
        },
        addItem: (root, args) => {
            console.log(Item);
            let item = new Item({
                name: args.name,
                category: args.category
            })
            console.log(item);
            return item.save();
        },
        addList: (root, args) => {
            let list = new List({
                name: args.name,
                expPrice: args.expPrice,
                boughtPrice: args.boughtPrice
            })
            return list.save();
        },
        addListItem: (root, args) => {
            let listItems = new ListItems({
                list:args.list,
                item: args.item, 
                quantity:args.quantity, 
                expPrice:args.expPrice, 
                boughtPrice:args.boughtPrice, 
                remarks:args.remarks
            });
            return listItems.save();
        }
    }
};

export default resolvers;