/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useCometdidDid() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.CometdidDid.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryOrgs = (id: string,  options: any) => {
    const key = { type: 'QueryOrgs',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.CometdidDid.query.queryOrgs(id).then( res => res.data );
    }, options);
  }
  
  const QueryOrgsAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryOrgsAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.CometdidDid.query.queryOrgsAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryValidDid = (did: string,  options: any) => {
    const key = { type: 'QueryValidDid',  did };    
    return useQuery([key], () => {
      const { did } = key
      return  client.CometdidDid.query.queryValidDid(did).then( res => res.data );
    }, options);
  }
  
  const QueryDid = (orgId: string, creator: string,  options: any) => {
    const key = { type: 'QueryDid',  orgId,  creator };    
    return useQuery([key], () => {
      const { orgId,  creator } = key
      return  client.CometdidDid.query.queryDid(orgId, creator).then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QueryOrgs,QueryOrgsAll,QueryValidDid,QueryDid,
  }
}