import { gql} from "@apollo/client";
const GET_ALL_CATEGORY = gql`
  query {
    getAllCategory {
      fld_name
      _id
      fld_isActive
    }
  }
`;
export {GET_ALL_CATEGORY}
