inpFunc :: Int -> Int -> [Int]
inpFunc a b = [a..b]


applicatorFunc :: [Int] -> Char -> Double
applicatorFunc inp s
    | s == 's'  = fromIntegral (sum inp)
    | s == 'a'  = fromIntegral (sum inp) / fromIntegral (length inp)  
    | otherwise = error "Invalid option! Please enter 's' for sum or 'a' for average."


main = do
    putStrLn "Enter the starting number (a):"
    a <- readLn
    putStrLn "Enter the ending number (b):"
    b <- readLn
    putStrLn "Enter 's' for sum or 'a' for average:"
    op <- getLine
    let result = applicatorFunc (inpFunc a b) (head op)  
    putStrLn ("Result = " ++ show result)
