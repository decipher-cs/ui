import Dropdown from '~/components/ui/Dropdown/Dropdown';
import {Meta} from '@storybook/react/*';
import {useState} from 'react';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';
import React from 'react';
import Button from '../Button/Button';

const placeholderWords= ['Eternity', 'Wisdom', 'Truth', 'Love', 'Freedom', 'Serenity', 'Hope', 'Courage', 'Grace', 'Harmony', 'Solitude', 'Enlightenment', 'Peace', 'Joy', 'Unity', 'Transcendence', 'Mystery', 'Compassion', 'Faith', 'Destiny'].map((v) => (<div key={v}>{v}</div>));

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: 'UI/Input/Dropdown',
};

export default meta;

export const DefaultTrigger= () => {
    return (
        <section>
            <SandboxEditor>
                <Dropdown>
                    {placeholderWords}
                </Dropdown>
            </SandboxEditor>
        </section>
    );
};

export const CustomTrigger= () => {
    return (
        <section>
            <SandboxEditor>
                <Dropdown.Root>
                    <Dropdown.Trigger>
                        Toggle
                    </Dropdown.Trigger>

                    <Dropdown.Portal>
                        {placeholderWords}
                    </Dropdown.Portal>
                </Dropdown.Root>
            </SandboxEditor>
        </section>
    );
};

export const styled= () => {
    return (
        <SandboxEditor>
            <Dropdown.Root>
                <Dropdown.Trigger>
                        Click to show
                </Dropdown.Trigger>

                <Dropdown.Portal>
                    {placeholderWords}
                </Dropdown.Portal>
            </Dropdown.Root>
        </SandboxEditor>
    );
};
