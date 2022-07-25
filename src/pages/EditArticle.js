import {ListOfArticles} from '../components/ListOfArticles';
import { Form } from '../components/Form';
import { Table } from '../components/Table';

export const EditArticle = () => {
  return (
    <>
      <Form
        title={'Edit Blog Article'}
        description={'Edit a blog article to feature in the Easybank homepage.'}

      />
      <Table/>
      <ListOfArticles
        button={false}
      />
      
    </>
  )
}