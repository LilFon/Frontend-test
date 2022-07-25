import {ListOfArticles} from '../components/ListOfArticles';
import { Form } from '../components/Form';
import { Table } from '../components/Table';
import {postValue} from '../utils/postValue';

export const AddArticle = () => {
  return (
    <>
      <Form
        text={'Add New Blog Article'}
        description={'Publish a new blog article to feature in the Easybank homepage.'}
        onSubmit={postValue}

      />
      <Table/>
      <ListOfArticles
        button={false}
      />
      
    </>
  )
}