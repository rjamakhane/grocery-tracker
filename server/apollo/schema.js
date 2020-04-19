import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Category {
    _id : ID!
    name: String
    created_at : String
    updatedAt : String
  }
  
  type Item {
    _id : ID!
    name: String
    category : Category
    created_at : String
    updatedAt : String
  }

  type List {
    _id : ID!
    name : String
    expPrice : String
    boughtPrice : String
    boughtFlag : Boolean!
    created_at : String
    updatedAt : String
  }

  type ListItems {
    _id :ID!
    list : List
    item : Item
    quantity : String!
    expPrice : String
    boughtPrice : String
    remarks: String
    created_at : String
    updatedAt : String
  }

  type Query {
    getCategories: [Category!]!
    getCategory(id:ID!): Category!
    getItems: [Item!]!,
    getItem(id:ID!):Item!
    getList: [List!]!
    getSingleList(id:ID!) : List!
    getListItems: [ListItems!]!,
    getListItem(id:ID!): ListItems!
  }

  type Mutation {
    addCategory(name: String): Category
    addItem(name : String, category: ID!): Item
    addList(name:String, expPrice: String, boughtPrice:String) : List
    addListItem(list:ID!, item: ID!, quantity:String, expPrice:String, boughtPrice:String, remarks:String) : ListItems
  }

`;

export default typeDefs;