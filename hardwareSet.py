class HWSet:
    def __init__(self, qty):
        """
        initializes new HWSet object with capacity set to qty.
        - when qty < 0, capacity set to 0
        
        :qty: integer value of capacity and initial availability 
        """
    
    def get_availability(self):
        """
        returns number of unused units
        """
    
    def get_capacity(self): 
        """
        returns total unit capacity
        """
    
    def get_checkedout_qty(self):
        """
        returns total number of checkout quantities
        """
    
    def check_out(self, qty):
        """
        checks out quantity requested
        - when qty > availability, check out all available units and return error
        - when qty < 0, return error
        """  
        
        
    def check_in(self, qty):
        """
        checks in quantity requested
        - if qty < 0, return error
        - if qty > checked out quantities, checks in checked out quantities and return error
        """