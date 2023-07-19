function towerOfHanoi(n, from_source,  to_destination,  aux_end)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_source, aux_end, to_destination);
       console.log("Move disk " + n + " from source " + from_source +
        " to destination " + to_destination+"  using auxilary  " + aux_end);
        towerOfHanoi(n - 1, aux_end, to_destination, from_source);
    }
  
    // Driver code
    var N = 3;
      
    // A, B and C are names of rods
    towerOfHanoi(N, 'A', 'C', 'B');

     towerOfHanoi(3,'A','C','B');