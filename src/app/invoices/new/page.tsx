'use client'

import React, {SyntheticEvent, useState} from 'react'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Form from 'next/form';

import {createAction} from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";
import Container from "@/components/Container";

const Page = () => {
    const [state, setState] = useState('ready')

    async function handleOnSubmit(event: SyntheticEvent) {
        if (state === 'pending') {
            event.preventDefault()
            return;
        }
        setState('pending');
    }

    return (
        <main className="h-full">
            <Container>
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-semibold">Create Invoice</h1>
                </div>

                <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
                    <div>
                        <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
                        <Input name="name" id="name" type="text"/>
                    </div>
                    <div>
                        <Label htmlFor="email" className="block mb-2 font-semibold text-sm">Email</Label>
                        <Input name="email" id="email" type="email"/>
                    </div>
                    <div>
                        <Label htmlFor="value" className="block mb-2 font-semibold text-sm">Value</Label>
                        <Input name="value" id="value" type="text"/>
                    </div>
                    <div>
                        <Label htmlFor="description" className="block mb-2 font-semibold text-sm">Description</Label>
                        <Textarea name="description" id="description"/>
                    </div>
                    <div>
                        <SubmitButton/>
                    </div>
                </Form>
            </Container>
        </main>
    )
}
export default Page
