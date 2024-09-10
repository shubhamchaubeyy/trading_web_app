package com.tradefolio.service;

import java.util.List;

import com.tradefolio.model.Asset;
import com.tradefolio.model.Coin;
import com.tradefolio.model.User;

public interface AssetService {

	Asset createAsset(User user ,Coin coin ,double quantity);
	
	Asset getAssetById(Long assetId) throws Exception;
	
	Asset getAssetByUserIdAndId(Long userId,Long assetId);
	
	List<Asset> getUsersAssets(Long userId);
	
	Asset updateAsset(Long assetId,double quantity) throws Exception;
	
	Asset findAssetByUserIdAndCoinId(Long userId,String coinId);
	
	void deleteAsset(Long assetId);
}
