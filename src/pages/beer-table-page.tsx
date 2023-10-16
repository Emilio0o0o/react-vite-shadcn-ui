import BeerTable from '@/components/table/tables/beerTable';

import { Box, Heading, Text, Grid } from '@radix-ui/themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BeerTablePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Beer table</CardTitle>
        <CardDescription>API Call to a fake database of beers around the world </CardDescription>
      </CardHeader>
      <CardContent>
        <BeerTable />
      </CardContent>
    </Card>
  );
}
