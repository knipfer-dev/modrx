<script>
  import Meta from '../../components/Meta';
  import TextInput from '../../components/TextInput';

  import DealerCard from './components/DealerCard';

  let searchedDealers = [];

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

  const search = e => {
    const searchTerm = e.target.value;

    if (e.target.value !== '') {
      searchedDealers = dealers.filter(dealer =>
        dealer.name.includes(searchTerm),
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
    <h1>Start searching to find dealers</h1>
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
