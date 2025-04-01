"use client"
import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient("https://fastidious-marmot-779.convex.cloud");

function Provider({children}){
    
    return(
        <div>
            <ConvexProvider client={convex}>{children}</ConvexProvider>;
            
        </div>
    )
}

export default Provider