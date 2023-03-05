type IContainer = {
  animationDuration: number,
  children: React.ReactNode
  isFinished: boolean
}
export const Container = ({ animationDuration, children, isFinished }: IContainer) => (
  <div
    className='pointer-events-none'
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);
