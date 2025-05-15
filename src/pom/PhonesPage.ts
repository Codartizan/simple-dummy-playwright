import { Page, Locator, expect } from '@playwright/test';

export class PhonesPage {
  readonly page: Page;
  // Locators for each phone
  readonly samsungGalaxyS25Ultra5G: Locator;
  readonly samsungGalaxyS25Plus5G: Locator;
  readonly samsungGalaxyS255G: Locator;
  readonly iphone16e: Locator;
  readonly samsungGalaxyZFold5_5G: Locator;
  readonly samsungGalaxyZFold6_5G: Locator;
  readonly oppoFindN3: Locator;
  readonly iphone16ProMax: Locator;
  readonly iphone15ProMax: Locator;
  readonly iphone15Plus: Locator;
  readonly samsungGalaxyZFlip6_5G: Locator;
  readonly oppoFindX8Pro: Locator;
  readonly iphone16Pro: Locator;
  readonly motorolaRazr50Ultra: Locator;
  readonly iphone15Pro: Locator;
  readonly iphone16Plus: Locator;
  readonly oppoFindN2Flip: Locator;
  readonly iphone16: Locator;
  readonly oppoReno13Pro: Locator;
  readonly samsungGalaxyS24_5G: Locator;
  readonly iphone15: Locator;
  readonly iphone14: Locator;
  readonly samsungGalaxyS24FE: Locator;
  readonly motorolaEdge50Pro: Locator;
  readonly oppoReno13: Locator;
  readonly iphone13: Locator;
  readonly iphoneSEGen3: Locator;
  readonly oppoReno10_5G: Locator;
  readonly samsungGalaxyA56_5G: Locator;
  readonly oppoReno13F: Locator;
  readonly motorolaEdge50Fusion: Locator;
  readonly samsungGalaxyA36_5G: Locator;
  readonly samsungGalaxyA34_5G: Locator;
  readonly samsungGalaxyXCover7: Locator;
  readonly samsungGalaxyA55_5G: Locator;
  readonly samsungGalaxyA26_5G: Locator;
  readonly oppoA98_5G: Locator;
  readonly motoG85: Locator;
  readonly samsungGalaxyA15_5G: Locator;
  readonly samsungGalaxyA16_5G: Locator;
  readonly oppoA60_5G: Locator;
  readonly samsungGalaxyA16_4G: Locator;
  readonly motoG15: Locator;
  readonly oppoA57s: Locator;
  readonly motoG24: Locator;
  readonly samsungGalaxyA06: Locator;
  readonly samsungGalaxyA05: Locator;
  readonly motoG05: Locator;
  // Existing locators
  readonly blackColorOption: Locator;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.samsungGalaxyS25Ultra5G = page.getByRole('link', { name: /Samsung Galaxy S25 Ultra 5G/i });
    this.samsungGalaxyS25Plus5G = page.getByRole('link', { name: /Samsung Galaxy S25\+ 5G/i });
    this.samsungGalaxyS255G = page.getByRole('link', { name: /Samsung Galaxy S25 5G/i });
    this.iphone16e = page.getByRole('link', { name: /iPhone 16e/i });
    this.samsungGalaxyZFold5_5G = page.getByRole('link', { name: /Samsung Galaxy Z Fold5 5G/i });
    this.samsungGalaxyZFold6_5G = page.getByRole('link', { name: /Samsung Galaxy Z Fold6 5G/i });
    this.oppoFindN3 = page.getByRole('link', { name: /OPPO Find N3/i });
    this.iphone16ProMax = page.getByRole('link', { name: /iPhone 16 Pro Max/i });
    this.iphone15ProMax = page.getByRole('link', { name: /iPhone 15 Pro Max/i });
    this.iphone15Plus = page.getByRole('link', { name: /iPhone 15 Plus/i });
    this.samsungGalaxyZFlip6_5G = page.getByRole('link', { name: /Samsung Galaxy Z Flip6 5G/i });
    this.oppoFindX8Pro = page.getByRole('link', { name: /OPPO Find X8 Pro/i });
    this.iphone16Pro = page.getByRole('link', { name: /iPhone 16 Pro/i });
    this.motorolaRazr50Ultra = page.getByRole('link', { name: /motorola razr 50 ultra/i });
    this.iphone15Pro = page.getByRole('link', { name: /iPhone 15 Pro/i });
    this.iphone16Plus = page.getByRole('link', { name: /iPhone 16 Plus/i });
    this.oppoFindN2Flip = page.getByRole('link', { name: /OPPO Find N2 Flip/i });
    this.iphone16 = page.getByRole('link', { name: /iPhone 16$/i });
    this.oppoReno13Pro = page.getByRole('link', { name: /OPPO Reno13 Pro/i });
    this.samsungGalaxyS24_5G = page.getByRole('link', { name: /Samsung Galaxy S24 5G/i });
    this.iphone15 = page.getByRole('link', { name: /iPhone 15$/i });
    this.iphone14 = page.getByRole('link', { name: /iPhone 14/i });
    this.samsungGalaxyS24FE = page.getByRole('link', { name: /Samsung Galaxy S24FE/i });
    this.motorolaEdge50Pro = page.getByRole('link', { name: /motorola edge 50 pro/i });
    this.oppoReno13 = page.getByRole('link', { name: /OPPO Reno13$/i });
    this.iphone13 = page.getByRole('link', { name: /iPhone 13/i });
    this.iphoneSEGen3 = page.getByRole('link', { name: /iPhone SE \(Gen 3\)/i });
    this.oppoReno10_5G = page.getByRole('link', { name: /OPPO Reno10 5G/i });
    this.samsungGalaxyA56_5G = page.getByRole('link', { name: /Samsung Galaxy A56 5G/i });
    this.oppoReno13F = page.getByRole('link', { name: /OPPO Reno13 F/i });
    this.motorolaEdge50Fusion = page.getByRole('link', { name: /motorola edge 50 fusion/i });
    this.samsungGalaxyA36_5G = page.getByRole('link', { name: /Samsung Galaxy A36 5G/i });
    this.samsungGalaxyA34_5G = page.getByRole('link', { name: /Samsung Galaxy A34 5G/i });
    this.samsungGalaxyXCover7 = page.getByRole('link', { name: /Samsung Galaxy XCover 7/i });
    this.samsungGalaxyA55_5G = page.getByRole('link', { name: /Samsung Galaxy A55 5G/i });
    this.samsungGalaxyA26_5G = page.getByRole('link', { name: /Samsung Galaxy A26 5G/i });
    this.oppoA98_5G = page.getByRole('link', { name: /OPPO A98 5G/i });
    this.motoG85 = page.getByRole('link', { name: /moto g85/i });
    this.samsungGalaxyA15_5G = page.getByRole('link', { name: /Samsung Galaxy A15 5G/i });
    this.samsungGalaxyA16_5G = page.getByRole('link', { name: /Samsung Galaxy A16 5G/i });
    this.oppoA60_5G = page.getByRole('link', { name: /OPPO A60 5G/i });
    this.samsungGalaxyA16_4G = page.getByRole('link', { name: /Samsung Galaxy A16 4G/i });
    this.motoG15 = page.getByRole('link', { name: /moto g15/i });
    this.oppoA57s = page.getByRole('link', { name: /OPPO A57s/i });
    this.motoG24 = page.getByRole('link', { name: /moto g24/i });
    this.samsungGalaxyA06 = page.getByRole('link', { name: /Samsung Galaxy A06/i });
    this.samsungGalaxyA05 = page.getByRole('link', { name: /Samsung Galaxy A05/i });
    this.motoG05 = page.getByRole('link', { name: /moto g05/i });
    // Existing locators
    this.blackColorOption = page.getByRole('button', { name: /Black|Black Titanium/i });
    this.addToCartButton = page.getByRole('button', { name: /Add to cart/i });
    this.cartButton = page.getByRole('button', { name: /cart/i });
    this.checkoutButton = page.getByRole('button', { name: /checkout|proceed to checkout/i });
  }

  async goto() {
    await this.page.goto('https://www.spark.co.nz/shop/mobile/phones/', { waitUntil: 'domcontentloaded' });
  }
}
