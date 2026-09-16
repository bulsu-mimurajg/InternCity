import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Section } from '@/types';

type Props = {
    sections: Section[];
    passwordRules: string;
};

export default function Register({ sections, passwordRules }: Props) {
    return (
        <>
            <Head title="Register" />
            <Form
                {...store.post()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            {/* Name fields row */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start">
                                <div className="grid gap-2">
                                    <Label htmlFor="first_name">
                                        First Name
                                    </Label>
                                    <Input
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="given-name"
                                        placeholder="First Name"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.first_name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="middle_name">
                                        Middle Name
                                    </Label>
                                    <Input
                                        id="middle_name"
                                        type="text"
                                        name="middle_name"
                                        tabIndex={2}
                                        autoComplete="additional-name"
                                        placeholder="Middle Name"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.middle_name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="last_name">Last Name</Label>
                                    <Input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        required
                                        tabIndex={3}
                                        autoComplete="family-name"
                                        placeholder="Last Name"
                                        disabled={processing}
                                    />
                                    <InputError message={errors.last_name} />
                                </div>
                            </div>

                            {/* Username + Email */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
                                <div className="grid gap-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        name="username"
                                        required
                                        tabIndex={4}
                                        autoComplete="username"
                                        placeholder="Ex. 2022100488"
                                        maxLength={10}
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        disabled={processing}
                                        onInput={(e) => {
                                            // keep only digits
                                            e.currentTarget.value =
                                                e.currentTarget.value
                                                    .replace(/\D/g, '')
                                                    .slice(0, 10);
                                        }}
                                    />
                                    <p className="text-muted-foreground text-xs">
                                        Use your student number
                                    </p>
                                    <InputError message={errors.username} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        tabIndex={5}
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        disabled={processing}
                                    />
                                    <p className="text-muted-foreground text-xs">
                                        Use your personal email
                                    </p>
                                    <InputError message={errors.email} />
                                </div>
                            </div>

                            {/* Section + Specialization + Contact */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start">
                                <div className="grid gap-2">
                                    <Label htmlFor="section">Section</Label>
                                    <Select
                                        name="section"
                                        required
                                        disabled={processing}
                                    >
                                        <SelectTrigger
                                            tabIndex={6}
                                            className="w-full"
                                        >
                                            <SelectValue placeholder="Select your section" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {sections.length === 0 ? (
                                                <SelectItem
                                                    value="no-sections"
                                                    disabled
                                                >
                                                    No sections available
                                                </SelectItem>
                                            ) : (
                                                sections.map((section) => (
                                                    <SelectItem
                                                        key={section.section_id}
                                                        value={
                                                            section.section_name
                                                        }
                                                    >
                                                        {section.section_name}
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <p className="text-muted-foreground text-xs">
                                        Use your current section
                                    </p>
                                    <InputError message={errors.section_id} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="specialization">
                                        Specialization
                                    </Label>
                                    <Select
                                        name="specialization"
                                        required
                                        disabled={processing}
                                    >
                                        <SelectTrigger
                                            tabIndex={7}
                                            className="w-full"
                                        >
                                            <SelectValue placeholder="Select specialization" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="BA">
                                                BA
                                            </SelectItem>
                                            <SelectItem value="WMAD">
                                                WMAD
                                            </SelectItem>
                                            <SelectItem value="SM">
                                                SM
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <p className="text-muted-foreground text-xs">
                                        Choose your specialization
                                    </p>
                                    <InputError
                                        message={errors.specialization}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="contact_number">
                                        Contact Number
                                    </Label>
                                    <Input
                                        id="contact_number"
                                        type="tel"
                                        name="contact_number"
                                        required
                                        tabIndex={8}
                                        autoComplete="tel"
                                        placeholder="09XXXXXXXXX"
                                        maxLength={11}
                                        pattern="[0-9]{11}"
                                        disabled={processing}
                                        onInput={(e) => {
                                            e.currentTarget.value =
                                                e.currentTarget.value
                                                    .replace(/\D/g, '')
                                                    .slice(0, 11);
                                        }}
                                    />
                                    <p className="text-muted-foreground text-xs">
                                        Enter your 11-digit mobile number
                                    </p>
                                    <InputError
                                        message={errors.contact_number}
                                    />
                                </div>
                            </div>

                            {/* Password fields */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={9}
                                        autoComplete="new-password"
                                        placeholder="Password"
                                        disabled={processing}
                                        passwordrules={passwordRules}
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation">
                                        Confirm password
                                    </Label>
                                    <PasswordInput
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        required
                                        tabIndex={10}
                                        autoComplete="new-password"
                                        placeholder="Confirm password"
                                        disabled={processing}
                                        passwordrules={passwordRules}
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <p className="text-muted-foreground text-justify text-xs">
                                        Password must be at least 8 characters,
                                        have at least one uppercase letter, one
                                        lowercase letter, one number, and one
                                        special character (@$!%*?&).
                                    </p>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 w-full"
                                tabIndex={11}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                Create account
                            </Button>
                        </div>

                        <div className="text-muted-foreground text-center text-sm">
                            Already have an account?{' '}
                            <TextLink href={login()} tabIndex={12}>
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Register.layout = {
    title: 'Create an account',
    description: 'Enter your details below to create your account',
    wide: true,
};
