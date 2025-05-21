import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
            isFocused ? 'border-[#00E6E6]' : '',
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          {...props}
        />
        {isFocused && (
          <span className="absolute inset-0 rounded-md pointer-events-none border border-[#00E6E6] opacity-50 animate-pulse"></span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };