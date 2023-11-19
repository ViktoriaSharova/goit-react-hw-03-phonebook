import { List, ListItem, ListItemBtn } from './ContactList.styled';

export const ContactList = ({ onDelete, filtredContacts }) => {
  return (
    <>
      {filtredContacts.length > 0 && (
        <List>
          {filtredContacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ListItemBtn onClick={() => onDelete(contact.id)}>
                Delete
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};