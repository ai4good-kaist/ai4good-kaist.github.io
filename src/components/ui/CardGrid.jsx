/**
 * Responsive card grid wrapper.
 * @param {number} columns - Number of columns (2, 3, or 4)
 * @param {React.ReactNode} children
 */
export default function CardGrid({ columns = 3, className = '', children, ...props }) {
  return (
    <div className={`card-grid card-grid--${columns} ${className}`} {...props}>
      {children}
    </div>
  );
}
