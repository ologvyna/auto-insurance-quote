'use client'

import {
  Image,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper, Container, AspectRatio,
} from '@chakra-ui/react'
import Steps from "@/components/Steps";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

const steps = [
  { title: '1', description: 'Owner Info' },
  { title: '2', description: 'Vehicles' },
  { title: '2', description: 'Drivers' },
  { title: '3', description: 'Drivers\' Record' },
];

export default function Home() {
  const stepperIndex = useSelector((state: RootState) => state.stepper.index);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <header className="flex flex-col gap-8 row-start-1 items-start" style={{width: "100%", height: "149px", maxHeight: "149px"}}>
            <Container bgGradient="linear(to-r, #112C4D, #406E8F)" h="149px" maxW="100%" display="flex" alignItems="center" pl="8px">
                <Image
                    aria-hidden
                    src="/images/logo.png"
                    alt="Socotra logo"
                    objectFit='cover'
                    boxSize="350px"
                    h="100px"
                />
            </Container>
        </header>
      <main className="flex flex-col gap-8 row-start-2 items-start align-top">
        <Container w="400px" mt="115px" pr="0" pl="0">
          {stepperIndex < steps.length && <Stepper index={stepperIndex} colorScheme='teal' size="xs" p="16px">
            {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                        fontSize="12px"
                        complete={<StepNumber />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                    />
                  </StepIndicator>
                  <StepSeparator />
                </Step>
            ))}
          </Stepper>}
          <Steps stepNumber={stepperIndex} />
        </Container>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
