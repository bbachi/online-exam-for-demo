import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useGetDataOnLoad = (dispatchFunc, data, reduxSliceName) => {

    const dispatch = useDispatch()

    const returnData = useSelector(state => state[reduxSliceName])

    useEffect(() => {

        dispatch(dispatchFunc(data))

    }, [])

    return returnData;
};
