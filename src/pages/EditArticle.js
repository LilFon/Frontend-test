import {ListOfArticles} from '../components/ListOfArticles';
import { Form } from '../components/Form';
import { Table } from '../components/Table';
import { useLocation } from "react-router-dom";
import { putValue } from '../utils/putValue';

export const EditArticle = () => {

  const location = useLocation();
  const params = parseInt(location.hash.substring(1));

  return (
    <>
      <Form
        text={'Edit Blog Article'}
        description={'Edit a blog article to feature in the Easybank homepage.'}
        id={params}
        onSubmit={putValue}
      />
      <Table/>
      <ListOfArticles
        button={false}
      />
      
    </>
  )
}