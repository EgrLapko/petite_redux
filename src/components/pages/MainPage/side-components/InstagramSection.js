import React, { Component } from 'react';
import InstagramPhoto from './InstagramPhoto';

export default class InstagramSection extends Component {
  render() {
    return (
      <div className = "insta-container">
        <InstagramPhoto 
             url = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Finsta-section%2F1.jpg?alt=media&token=a317abd4-54c3-445a-9c66-dfd809729c2d'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Finsta-section%2F2.jpg?alt=media&token=0d98cf94-cbca-4554-85dd-d8bbd78b7f92'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Finsta-section%2F3.jpg?alt=media&token=46d2a35b-25ef-4889-9f61-ddbdfd10c01d'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Finsta-section%2F5.jpg?alt=media&token=0dd88f5d-98cf-4695-82c9-02fe620ea7d4'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Finsta-section%2F6.jpg?alt=media&token=694bf98e-49f6-4dd9-b6f3-93d692d4e17d'
             instalink = '@somelinkhere'
        />
        <InstagramPhoto 
             url = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Finsta-section%2F4.jpg?alt=media&token=3ee6ca37-bfdd-4136-834f-3acdb58f21d8'
             instalink = '@somelinkhere'
        />
      </div>
    )
  }
}
