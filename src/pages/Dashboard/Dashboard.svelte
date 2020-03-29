<script>
  import Meta from '../../components/Meta';
  import TextInput from '../../components/TextInput';

  import DealerCard from './components/DealerCard';
  import NoDealers from './components/NoDealers';

  let searchedDealers = [];

  const dealers = [
    {
      id: '1234',
      name: 'Subaru',
      location: '1234 Race St. Loveland OH, 45140',
      modFriendlyRating: 4,
    },
    {
      id: '4567',
      name: 'Ford',
      location: '2345 Race St. Florence KY, 41011',
      modFriendlyRating: 2,
    },
  ];

  const search = e => {
    const searchTerm = e.target.value;

    if (e.target.value !== '') {
      searchedDealers = dealers.filter(dealer =>
        dealer.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else {
      searchedDealers = [];
    }
  };
</script>

<Meta title="Dashboard" description="ModRx Dashboard" />

<div class="p-4">
  <div class="flex flex-row items-center h-12 mb-6">
    <TextInput fullWidth placeholder="Search Dealers" on:keyup={search} />
  </div>
  {#if searchedDealers.length === 0}
    <NoDealers />
  {/if}
  <div class="grid md:grid-flow-row md:grid-cols-3 gap-4">
    {#each searchedDealers as dealer}
      <DealerCard
        name={dealer.name}
        location={dealer.location}
        modFriendlyRating={dealer.modFriendlyRating} />
    {/each}
  </div>
</div>
