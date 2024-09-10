import api from "@/config/api";
import * as types from "./ActionTypes";

export const getUserWallet =(jwt) =>async (dispatch) =>{
    dispatch({type:types.GET_USER_WALLET_REQUEST});
    try{
        const response = await api.get("/api/wallet",{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });

        dispatch({type:types.GET_USER_WALLET_SUCCESS, payload:response.data});
        console.log("user wallet",response.data)
    }
    catch(error){
        console.log(error)
        dispatch({type:types.GET_USER_WALLET_FAILURE,error:error.message})
    }
}

export const getWalletTransactions =({jwt}) =>async (dispatch) =>{
    dispatch({type:types.GET_WALLET_TRANSACTION_REQUEST});
    try{
        const response = await api.get("/api/wallet/transations",{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });

        dispatch({type:types.GET_WALLET_TRANSACTION_SUCCESS, payload:response.data});
    }
    catch(error){
        console.log(error)
        dispatch({type:types.GET_WALLET_TRANSACTION_FAILURE,error:error.message})
    }
}

export const depositeMoney =({jwt,orderId,paymentId ,navigate}) =>async (dispatch) =>{
    dispatch({type:types.DEPOSITE_MONEY_REQUEST});
    try{
        const response = await api.put("/api/wallet/deposit",null,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
            params :{
                order_id:orderId,
                payment_id:paymentId,
            }
        });

        dispatch({type:types.DEPOSITE_MONEY_SUCCESS, payload:response.data});
        navigate("/wallet")
        console.log(response.data)
    }
    catch(error){
        console.log(error)
        dispatch({type:types.DEPOSITE_MONEY_FAILURE,error:error.message})
    }
}

export const paymentHandler =({jwt,amount,paymentMethod}) =>async (dispatch) =>{
    dispatch({type:types.DEPOSITE_MONEY_REQUEST});
    try{
        const response = 
        await api.post(`/api/payment/${paymentMethod}/amount/${amount}`,null,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
            
        });
        window.location.href = response.data.payment_url;
        // dispatch({type:types.DEPOSITE_MONEY_SUCCESS, payload:response.data});
        
    }
    catch(error){
        console.log("error",error)
        dispatch({type:types.DEPOSITE_MONEY_FAILURE,error:error.message})
    }
}


export const transferMoney =({jwt,walletId,reqData}) =>async (dispatch) =>{
    dispatch({type:types.TRANSFER_MONEY_REQUEST});
    try{
        const response = 
        await api.put(`/api/wallet/${walletId}/transfer`,reqData,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
            
        });
        dispatch({type:types.TRANSFER_MONEY_SUCCESS, payload:response.data});
        
    }
    catch(error){
        console.log("error",error)
        dispatch({type:types.TRANSFER_MONEY_FAILURE,error:error.message})
    }
}


