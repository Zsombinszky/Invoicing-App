'use client'

import React from 'react'
import {Button} from "@/components/ui/button";
import {useFormStatus} from 'react-dom'
import {LoaderCircle} from 'lucide-react';

const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
        <Button className="relative w-full font-semibold">
            <span className={pending ? 'text-transparent' : ''}>Submit</span>
            {pending && (
                <span className="absolute flex items-center justify-centers w-full h-full text-gray-400">
                <LoaderCircle className="animate-spin"/>
            </span>
            )}
        </Button>
    )
}
export default SubmitButton
