//DATA
const DataBurgers = [
    {
        id: 123456789,
        rarity: 'Uncommon',
        name: 'Triple Cheese Burger',
        score: 7.5,
        state: 'infinite',
        progressBar: 100,
        progressBarMax: 100
      },
      {
        id: 'temporal',
        rarity: 'Rare',
        name: 'Triple Cheese Burger',
        score: 11.1,
        state: 'temporal',
        progressBar: 275,
        progressBarMax: 500
      },
      {
        id: 'temporal',
        rarity: 'Uncommon',
        name: 'Triple Cheese Burger',
        score: 7.5,
        state: 'temporal',
        progressBar: 25,
        progressBarMax: 300,
      },
      {
        id: 4022981,
        rarity: 'Legendary',
        name: 'Home Made Burger',
        score: 30,
        state: 'infinte',
        progressBar: 100,
        progressBarMax: 100
      },
      {
        id: 'temporal',
        rarity: 'Common',
        name: 'Clasic Burger',
        score: 5.1,
        state: 'temporal',
        progressBar: 60,
        progressBarMax: 100
      },
      {
        id: 3618110,
        rarity: 'Common',
        name: 'Clasic Burger',
        score: 5.1,
        state: 'infinte',
        progressBar: 100,
        progressBarMax: 100
      },
      {
        id: 3618110,
        rarity: 'Common',
        name: 'Clasic Burger',
        score: 5.1,
        state: 'infinte',
        progressBar: 100,
        progressBarMax: 100
      },
      {
        id: 3618110,
        rarity: 'Common',
        name: 'Clasic Burger',
        score: 5.1,
        state: 'infinte',
        progressBar: 100,
        progressBarMax: 100
      },
      {
        id: 3618110,
        rarity: 'Common',
        name: 'Clasic Burger',
        score: 5.1,
        state: 'infinte',
        progressBar: 100,
        progressBarMax: 100
      },
      {
        id: 3618110,
        rarity: 'Common',
        name: 'Clasic Burger',
        score: 5.1,
        state: 'infinte',
        progressBar: 100,
        progressBarMax: 100
      }
] 

const DataBykes = [
    {
        id: 4567653,
        status: "temporal",
        level: 1,
        progressBar: 100,
        progressBarMax: 100,
      },
      {
        id: 34212346,
        status: "temporal",
        level: 2,
        progressBar: 100,
        progressBarMax: 100,
      },
      {
        id: 12345678,
        status: "temporal",
        level: 3,
        progressBar: 100,
        progressBarMax: 100,
      },
      {
        id: 4567653,
        status: "temporal",
        level: 1,
        progressBar: 100,
        progressBarMax: 100,
      },
      {
        id: 34212346,
        status: "temporal",
        level: 2,
        progressBar: 100,
        progressBarMax: 100,
      },
      {
        id: 12345678,
        status: "temporal",
        level: 3,
        progressBar: 100,
        progressBarMax: 100,
      }
]

const fetchRequestInventoryData = () => {
    return {
        type: 'REQUEST_INVENTORY_DATA'
    }
}

const receiveInventoryData = (payload) =>{
    return {
        type: 'RECEIVE_INVENTORY_DATA',
        payload: payload
    }
}

const receiveInventoryError = (payload) => {
    return {
        type: 'RECEIVE_INVENTORY_ERROR',
        payload: payload
    }
}

export const fetchInventoryData = () => {
    return  async (dispatch) => {
        dispatch(fetchRequestInventoryData());
        try {
        setTimeout(() => {
            dispatch(receiveInventoryData({
                burgers: DataBurgers,
                bykes: DataBykes
            }));
        }, 1000);
        } catch (error) {
            dispatch(receiveInventoryError({
                errorMessage: error
            }));
            console.log("error",error);
        }
    }
}