'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { Plus } from 'lucide-react';
import { columns, Payment } from './columns';
import { DataTable } from '@/components/data-table';

const data: Payment[] = [
  {
    id: '3442ed34f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '344wed34f',
    amount: 150,
    status: 'success',
    email: 'jej@example.com',
  },
];

const AccountsPage = () => {
  const { onOpen } = useNewAccount();
  return (
    <div className='max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
      <Card className='border-none drop-shadow-sm'>
        <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle className='text-xl line-clamp-1'>Account page</CardTitle>
          <Button size='sm' onClick={onOpen}>
            {' '}
            <Plus className='size-4 mr-2' /> Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            filterKey='email'
            onDelete={() => {}}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
