import React from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';
import { Table } from 'antd';
import PreloaderIcon from 'react-preloader-icon';
import Spinning from 'react-preloader-icon/loaders/Spinning';
import './UsersList.css';


class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchData('https://demo2343337.mockable.io/users.json');
    }

    render() {
      console.log(this.props.users);
      const columns = [{
          title: "ID",
          dataIndex: 'id',
          key: 'id',
        }, {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: 'Surname',
          dataIndex: 'surname',
          key: 'surname',
        }, {
            title: 'Desription',
            dataIndex: 'desc',
            key: 'desc',
        }];

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the users</p>;
        }

        if (this.props.isLoading) {
            return (
              <div className="preloader">
                <PreloaderIcon
                  loader={Spinning}
                  size={60}
                  strokeWidth={8}
                  strokeColor="#006064"
                  duration={800}
                />
              </div>
            );
        }

        return (
            <Table 
              columns={columns} 
              dataSource={this.props.users} 
              rowKey="id" 
              pagination={{ pageSize: 5 }} 
            />    
        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        hasErrored: state.usersHasErrored,
        isLoading: state.usersIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(usersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
