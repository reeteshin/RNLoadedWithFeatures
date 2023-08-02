import axios from 'axios';
import {Dispatch} from 'redux';
import {
  Failed,
  FailedInformationFromApi,
  Requested,
  RequestedInformationFromApi,
  Success,
  SuccessInformationFromApi,
} from './ActionCreator';
import {ApiKey} from '../Constants';

// ERR_NETWORK
// ERR_BAD_REQUEST

export const GetcoordinateOfWether = (text:string) => {
  console.log('APi Call Start');
  return (dispatch: Dispatch) => {
    dispatch(Requested());
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=10&appid=${ApiKey}`,
      )
      .then(res => {
        dispatch(Success(res));
        console.log('Call', res);
      })
      .catch(massage => {
        dispatch(Failed(massage.code));
        console.log('massage', massage.code);
      });
  };
};
//&exclude={part}
export const GetDetailsOfWeatherbyCoordinate = (lat:number,lon:number) => {
  return (dispatch: Dispatch) => {
    dispatch(RequestedInformationFromApi());
    axios
      .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}`)
      .then(res => {
        dispatch(SuccessInformationFromApi(res));
      })
      .catch(error => {
        dispatch(FailedInformationFromApi(error.code));
      });
  };
};
