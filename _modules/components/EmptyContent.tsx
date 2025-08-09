export default function EmptyContent({
  emptyText,
}: {
  emptyText?: boolean | undefined;
}) {
  return (
    <div
      className='flex flex-col flex-1 gap-5 items-center justify-center'
      data-component='EmptyContent'
    >
      {!emptyText && (
        <p className='select-none text-xl'>No Matching Search Results</p>
      )}
      {emptyText && <p className='select-none text-xl'>No Results</p>}
    </div>
  );
}
