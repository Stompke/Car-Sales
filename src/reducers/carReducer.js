export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialState, action) => {
      console.log(state, action)
    switch( action.type ) {
        case 'ADD_FEATURE':
            console.log('add feature case')
            return {
                ...state,
                additionalPrice: state.additionalPrice + state.additionalFeatures.find(item => item.id === action.payload).price,
                car: {...state.car,
                    features: [
                    ...state.car.features,
                    state.additionalFeatures.find(item => item.id === action.payload)
                    ]  
                  },
                additionalFeatures: [...state.additionalFeatures.filter(item => item.id !== action.payload)]
            };
        case 'REMOVE_FEATURE':
            console.log(action.payload)
            console.log(state.car.features)
            return {
              ...state,
              // additionalPrice: state.addiontalPrice - state.car.features.find(item => item.id === action.payload).price,
              car: {...state.car,
              features: [
              ...state.car.features.filter(item => item.id !== action.payload)
              ]
              },
              additionalFeatures: [
                ...state.additionalFeatures,
                state.car.features.find(item => item.id === action.payload)
              ]
            };
        case 'TEST':
          console.log('it worked!')
          return state;
        default:
            return state;
    }
  }