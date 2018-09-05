import {PropTypes} from "prop-types";

export * from "./userActions";
export * from "./postActions";


// export const createIdea = ({title, idea}) => {
//   const { uid } = firebase.auth().currentUser;
//
//   return (dispatch) => {
//     firebase.database().ref(`/userIdeas/${uid}/ideas`)
//       .push({title, idea})
//       .then(() => dispatch({type: 'NEW_IDEA'}));
//   }
// };
//
// export const getIdeas = () => {
//   const { uid } = firebase.auth().currentUser;
//
//   return (dispatch) => {
//     firebase.database().ref(`/userIdeas/${uid}/ideas`)
//       .on('value', (snapshot) => {
//         dispatch({type: 'GET_IDEAS', payload: snapshot.val()})
//       });
//   }
// };
//
// export const editIdea = ({title, idea, id}) => {
//   const { uid } = firebase.auth().currentUser;
//
//   return (dispatch) => {
//     firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
//       .set({title, idea})
//       .then(() => dispatch({type: 'IDEA_UPDATED'}));
//   }
// };
//
// export const deleteIdea = ({ id }) => {
//   const { uid } = firebase.auth().currentUser;
//
//   return (dispatch) => {
//     firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
//       .remove()
//       .then(() => dispatch({type: 'IDEA_DELETED'}));
//   }
// };
