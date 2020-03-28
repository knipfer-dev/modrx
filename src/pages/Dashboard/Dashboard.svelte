<script>
  import Meta from '../../components/Meta';
  import TextInput from '../../components/TextInput';

  import DealerCard from './components/DealerCard';

  const dealers = [
    {
      id: '1234',
      name: 'Subaru',
      location: 'Loveland OH, 45140',
      modFriendlyRating: 4.8,
    },
    {
      id: '4567',
      name: 'Ford',
      location: 'Florence KY, 41011',
      modFriendlyRating: 4.8,
    },
  ];
</script>

<Meta title="Dashboard" description="ModRx Dashboard" />

<div class="p-4">
  <div class="flex flex-row items-center h-12 mb-6">
    <TextInput fullWidth placeholder="Search Dealers" />
  </div>
  <div class="grid md:grid-flow-row md:grid-cols-3 gap-4">
    {#each dealers as dealer}
      <DealerCard
        name={dealer.name}
        location={dealer.location}
        modFriendlyRating={dealer.modFriendlyRating} />
    {/each}
  </div>
</div>
