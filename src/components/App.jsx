import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionsHistory items={transactions} />
    </Container>
  );
};