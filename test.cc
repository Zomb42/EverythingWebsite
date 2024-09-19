#include <iostream>
#include <string>

int main() {
    std::string line = "FMNC_ManagerStats::FMNC_ManagerStats() : Stats() { Allocate(FMNC_MANAGER_STAT_LAST); }";
    int count = std::count(line.begin(), line.end(), ':') / 2; // Alternative method to count "::" pairs

    std::cout << "Count of '::': " << count << std::endl; // Output should be 2
    return 0;
}
