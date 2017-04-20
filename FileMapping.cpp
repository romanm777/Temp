#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct data {
	int size;
	char items[512];
	float * dataPoints;
};

void writeToBuffer( data *input, char *buffer ) {
	int sizeOfData = sizeof( data );
	int dataPointsSize = sizeof( float ) * input->size;

	printf( "size of data %d\n", sizeOfData );

	memcpy( buffer, input, sizeOfData );

	printf( "pointer to dataPoints of original %x\n", input->dataPoints );

	memcpy( buffer + sizeOfData, input->dataPoints, dataPointsSize );
}

void readFromBuffer( data *target, char * buffer ) {
	memcpy( target, buffer, sizeof( data ) );

	printf( "pointer to datapoints of copy %x, same as original\n", target->dataPoints );


	// give ourselves a new array
	target->dataPoints = ( float * ) malloc( target->size * sizeof( float ) );

	// do a deep copy, since we just copied the same pointer from 
	// the previous data into our local

	memcpy( target->dataPoints, buffer + sizeof( data ), target->size * sizeof( float ) );

	printf( "pointer to datapoints of copy %x, now it's own copy\n", target->dataPoints );
}

int main( int argc, char* argv[] )
{
	data test;

	for ( unsigned int i = 0; i<512; i++ ) {
		test.items[i] = i;
	}

	test.size = 10;

	// create an array and populate the data
	test.dataPoints = new float[test.size];

	for ( unsigned int i = 0; i<test.size; i++ ) {
		test.dataPoints[i] = ( float ) i * ( 1000.0 );
	}

	// print it out for demosntration
	for ( unsigned int i = 0; i<test.size; i++ ) {
		printf( "data point value %d: %f\n", i, test.dataPoints[i] );
	}

	// create a memory buffer. this is no different than the shared memory
	char * memBuffer = ( char* ) malloc( sizeof( data ) + 512 + sizeof( float ) * test.size + 200 );

	// create a target we'll load values into
	data test2;

	// write the original out to the memory buffer
	writeToBuffer( &test, memBuffer );

	// read from the memory buffer into the target
	readFromBuffer( &test2, memBuffer );

	// print for demonstration
	printf( "copy number %d\n", test2.size );
	for ( int i = 0; i<test2.size; i++ ) {
		printf( "\tcopy value %d: %f\n", i, test2.dataPoints[i] );
	}

	// memory cleanup

	delete memBuffer;
	delete[] test.dataPoints;

	return 0;
}